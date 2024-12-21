"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { ArrowUpDown, TrendingUp, TrendingDown } from 'lucide-react';

const TradingWidget = () => {
  const [tradeType, setTradeType] = useState('BUY');
  const [amount, setAmount] = useState('');

  const handleTrade = () => {
    // Implement trade execution logic
    console.log(`Executing ${tradeType} trade for ${amount} SOL`);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Quick Trade</span>
          <ArrowUpDown className="w-5 h-5 text-gray-500" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Toggle
              pressed={tradeType === 'BUY'}
              onPressedChange={() => setTradeType('BUY')}
              className="flex-1 data-[state=on]:bg-green-500"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Buy
            </Toggle>
            <Toggle
              pressed={tradeType === 'SELL'}
              onPressedChange={() => setTradeType('SELL')}
              className="flex-1 data-[state=on]:bg-red-500"
            >
              <TrendingDown className="w-4 h-4 mr-2" />
              Sell
            </Toggle>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Amount (SOL)</label>
            <Input
              type="number"
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full"
            />
          </div>

          <div className="p-3 bg-gray-50 rounded-md">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Estimated BABABILL:</span>
              <span className="font-medium">1,234.56</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Price Impact:</span>
              <span className="font-medium text-yellow-600">0.12%</span>
            </div>
          </div>

          <Button
            onClick={handleTrade}
            className="w-full"
            variant={tradeType === 'BUY' ? 'default' : 'destructive'}
          >
            {tradeType} BABABILL
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingWidget;