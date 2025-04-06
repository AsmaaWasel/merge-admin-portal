import Layout from "@/app/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CallsPage() {
  return (
    <Layout>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View and manage all call records here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
