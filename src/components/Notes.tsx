import { useState, useMemo } from 'react';
import { Search, Grid, List} from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import DocumentCard from './DocumentCard';
import { documentTypesConfig } from '@/types/documentTypes';
import { DocumentConfig } from '@/types/documentConfig';
import {documentsData} from '@/data/notes';


export default function Notes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDegree, setSelectedDegree] = useState<'triennale' | 'magistrale'>('triennale');

  const filteredDocuments = useMemo(() => {
    return documentsData.filter(doc => {
      const matchesSearch = (
        doc.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesType = !selectedType || doc.type === selectedType;
      const matchesDegree = doc.degree === selectedDegree;
      return matchesSearch && matchesType && matchesDegree;
    });
  }, [searchTerm, selectedType, selectedDegree]);

  // First group by year, then by course
  const groupedByYear = useMemo(() => {
    const yearGroups = new Map<string, Map<string, DocumentConfig[]>>();
    
    filteredDocuments.forEach(doc => {
      // Initialize year group if it doesn't exist
      if (!yearGroups.has(doc.year)) {
        yearGroups.set(doc.year, new Map());
      }
      
      const courseGroup = yearGroups.get(doc.year)!;
      if (!courseGroup.has(doc.course)) {
        courseGroup.set(doc.course, []);
      }
      
      courseGroup.get(doc.course)!.push(doc as DocumentConfig);
    });

    // Convert to sorted array of year entries
    return Array.from(yearGroups.entries())
      .sort((a, b) => a[0].localeCompare(b[0])); // Sort by year
  }, [filteredDocuments]);

  

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Tabs defaultValue="triennale" onValueChange={(value) => setSelectedDegree(value as 'triennale' | 'magistrale')}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <TabsList>
            <TabsTrigger value="triennale">Triennale</TabsTrigger>
            <TabsTrigger value="magistrale">Magistrale</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Cerca per corso o titolo..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(documentTypesConfig) as Array<keyof typeof documentTypesConfig>).map(type => (
            <Badge
              key={type}
              variant="secondary"
              className={`cursor-pointer ${selectedType === type ? 'bg-primary' : ''}`}
              onClick={() => setSelectedType(selectedType === type ? null : type)}
            >
              {documentTypesConfig[type].label}
            </Badge>
          ))}
        </div>

        <TabsContent value={selectedDegree}>
          <div className="space-y-12">
            {groupedByYear.map(([year, courses]) => (
              <div key={year} className="space-y-8">
                <h2 className="text-2xl font-bold text-white">{year}</h2>
                {Array.from(courses.entries()).map(([course, docs]) => (
                  <div key={`${year}-${course}`} className="space-y-4">
                    <h3 className="text-xl font-semibold text-white ml-4">{course}</h3>
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                      {docs.map((doc) => (
                        <DocumentCard key={doc.id} doc={doc} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          Nessun documento trovato per la ricerca corrente
        </div>
      )}
    </div>
  );
}