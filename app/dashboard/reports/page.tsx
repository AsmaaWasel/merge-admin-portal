import Layout from "@/app/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <Layout>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View analytics and performance reports here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
