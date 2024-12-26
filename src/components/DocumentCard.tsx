import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Download, Eye} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DocumentConfig } from '@/types/documentConfig';
import { documentTypesConfig } from '@/types/documentTypes';

const DocumentCard = ({ doc }: { doc: DocumentConfig }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold mb-1">{doc.title}</CardTitle>
            <Badge variant="secondary" className={`${documentTypesConfig[doc.type].color} text-white`}>
              {documentTypesConfig[doc.type].label}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400 mb-4">{doc.description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
          <span>{doc.date}</span>
          <span>•</span>
          <span>{doc.pages} pagine</span>
          <span>•</span>
          <span>{doc.size}</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => window.open(doc.path, '_blank')}>
            <Download size={16} className="mr-2" />
            Anteprima
          </Button>
          <Button size="sm" variant="outline">
            <Eye size={16} className="mr-2" />
            Download
          </Button>
          {/* <Button size="sm" variant="outline">
            <Star size={16} />
          </Button>
          <Button size="sm" variant="outline">
            <Share2 size={16} />
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );

export default DocumentCard;