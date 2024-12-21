import DashboardLayout from './components/dashboard/layout';
import PerformanceChart from './components/dashboard/performance-chart';
import TradingWidget from './components/dashboard/trading-widget';
import TradeHistory from './components/dashboard/trade-history';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        {/* Main content area - 8 columns on desktop */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Performance Chart */}
          <PerformanceChart />
          
          {/* Trade History */}
          <TradeHistory />
        </div>

        {/* Sidebar - 4 columns on desktop */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Trading Widget */}
          <TradingWidget />
          
          {/* AI Insights Card */}
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-900">Market Sentiment</div>
                  <p className="text-sm text-purple-700 mt-1">
                    Recent trading patterns suggest increasing buy pressure. Consider adjusting position sizes upward.
                  </p>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-900">Vector Analysis</div>
                  <p className="text-sm text-blue-700 mt-1">
                    Similar market conditions in past led to 15% average returns over 24h period.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}