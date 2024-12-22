import { useState } from 'react';
import { ChevronDown, ChevronRight, Grid, List } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

// Interfacce TypeScript
interface CourseFiles {
  [course: string]: string[];
}

interface YearCourses {
  [year: string]: CourseFiles;
}

interface DegreeYears {
  [degree: string]: YearCourses;
}

// Dati tipizzati
const NotesData: DegreeYears = {
  triennale: {
    'Anno 1': {
      'Analisi 1': ['analisi1_parte1.pdf', 'analisi1_parte2.pdf'],
      'Fisica 1': ['fisica1_teoria.pdf', 'fisica1_esercizi.pdf'],
    },
    'Anno 2': {
      'Analisi 2': ['analisi2.pdf'],
      'Fisica 2': ['fisica2.pdf'],
    },
    'Anno 3': {
      'Elettronica': ['elettronica_appunti.pdf'],
    },
  },
  magistrale: {
    'Anno 1': {
      'Controlli Automatici': ['controlli_teoria.pdf'],
      'Machine Learning': ['ml_notes.pdf'],
    },
    'Anno 2': {
      'Robotica': ['robotica_appunti.pdf'],
    },
  },
};

// Tipi per lo stato dei tab
type TabState = {
  degree?: string | null;
  year?: string | null;
  course?: string | null;
};

const Notes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [expandedTabs, setExpandedTabs] = useState<TabState>({});

  const toggleTab = (type: keyof TabState, name: string): void => {
    setExpandedTabs((prev) => ({
      ...prev,
      [type]: prev[type] === name ? null : name,
    }));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredNotes: DegreeYears = Object.entries(NotesData).reduce<DegreeYears>((acc, [degree, years]) => {
    const filteredYears: YearCourses = Object.entries(years).reduce<YearCourses>((yearAcc, [year, courses]) => {
      const filteredCourses: CourseFiles = Object.entries(courses).reduce<CourseFiles>((courseAcc, [course, files]) => {
        if (course.toLowerCase().includes(searchTerm) || files.some((file) => file.toLowerCase().includes(searchTerm))) {
          courseAcc[course] = files;
        }
        return courseAcc;
      }, {});

      if (Object.keys(filteredCourses).length > 0) {
        yearAcc[year] = filteredCourses;
      }
      return yearAcc;
    }, {});

    if (Object.keys(filteredYears).length > 0) {
      acc[degree] = filteredYears;
    }
    return acc;
  }, {});

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Cerca appunti..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-600'} rounded-lg`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-600'} rounded-lg`}
            >
              <Grid size={20} />
            </button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
          {Object.entries(filteredNotes).map(([degree, years]) => (
            <div key={degree} className="bg-sky-900 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleTab('degree', degree)}
                className="w-full px-4 py-3 flex items-center justify-between text-white hover:bg-sky-800 transition-colors"
              >
                <span className="font-semibold capitalize">{degree}</span>
                {expandedTabs.degree === degree ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {expandedTabs.degree === degree && (
                <div className="px-4 pb-4">
                  {Object.entries(years).map(([year, courses]) => (
                    <div key={year} className="ml-4 mt-2">
                      <button
                        onClick={() => toggleTab('year', year)}
                        className="w-full px-4 py-2 flex items-center justify-between text-white hover:bg-sky-800 rounded-md transition-colors"
                      >
                        <span>{year}</span>
                        {expandedTabs.year === year ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {expandedTabs.year === year && (
                        <div className="ml-4">
                          {Object.entries(courses).map(([course, files]) => (
                            <div key={course} className="mt-2">
                              <button
                                onClick={() => toggleTab('course', course)}
                                className="w-full px-4 py-2 flex items-center justify-between text-white hover:bg-sky-800 rounded-md transition-colors"
                              >
                                <span>{course}</span>
                                {expandedTabs.course === course ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                              </button>
                              {expandedTabs.course === course && (
                                <div className="ml-8 mt-2 grid grid-cols-1 gap-4">
                                  {files.map((file) => (
                                    <Card key={file} className="bg-sky-800 text-white">
                                      <CardHeader>
                                        <CardTitle>{file}</CardTitle>
                                        <CardDescription>Anteprima documento</CardDescription>
                                      </CardHeader>
                                      <CardContent>
                                        <div className="flex items-center justify-between">
                                          <a
                                            href={`/notes/${degree}/${year}/${course}/${file}`}
                                            className="text-sky-300 hover:text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            Visualizza
                                          </a>
                                          <button className="text-sky-300 hover:text-white">Scarica</button>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
