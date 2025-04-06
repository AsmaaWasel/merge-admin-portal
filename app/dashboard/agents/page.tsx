import Layout from "@/app/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgentsPage() {
  return (
    <Layout>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your call center agents here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
