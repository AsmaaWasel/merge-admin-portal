import Layout from "@/app/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MediaPage() {
  return (
    <Layout>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Media</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage call recordings and media files here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
