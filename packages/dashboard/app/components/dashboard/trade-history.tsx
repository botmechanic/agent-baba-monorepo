"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Trade {
  id: string;
  type: 'BUY' | 'SELL';
  amount: number;
  price: number;
  timestamp: string;
  priceImpact: number;
  status: 'completed' | 'pending' | 'failed';
}

// Sample data - replace with real data from your API
const trades: Trade[] = [
  {
    id: '1',
    type: 'BUY',
    amount: 100,
    price: 1.23,
    timestamp: '2024-01-20 14:30:00',
    priceImpact: 0.12,
    status: 'completed'
  },
  {
    id: '2',
    type: 'SELL',
    amount: 50,
    price: 1.25,
    timestamp: '2024-01-20 14:15:00',
    priceImpact: 0.08,
    status: 'completed'
  },
  // Add more sample trades...
];

const TradeHistory = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Trades</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trades.map((trade) => (
            <div 
              key={trade.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                {trade.type === 'BUY' ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <div className="font-medium">
                    {trade.type} {trade.amount} BABABILL
                  </div>
                  <div className="text-sm text-gray-500">
                    @ ${trade.price}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Badge variant={trade.status === 'completed' ? 'default' : 'secondary'}>
                    {trade.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Impact: {trade.priceImpact}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeHistory;