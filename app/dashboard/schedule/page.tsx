import Layout from "@/app/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SchedulePage() {
  return (
    <Layout>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage agent schedules and shifts here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
