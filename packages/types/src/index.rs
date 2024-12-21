// Trade Types
export interface Trade {
  id: number;
  portfolioId: number;
  tradeType: 'BUY' | 'SELL';
  tokenIn: string;
  tokenOut: string;
  amountIn: number;
  amountOut: number;
  priceAtTrade: number;
  estimatedPriceImpact: number;
  slippageBps: number;
  feesSol: number;
  virtualSignature: string;
  poolStateId: number;
  status: 'PENDING' | 'EXECUTED' | 'FAILED' | 'CANCELLED';
  executedAt?: Date;
  createdAt: Date;
  tradePnlUsd?: number;
  metadata?: Record<string, any>;
}

// Portfolio Types
export interface Portfolio {
  id: number;
  walletAddress: string;
  initialBalanceSol: number;
  initialBalanceBababill: number;
  currentBalanceSol: number;
  currentBalanceBababill: number;
  totalPnlUsd: number;
  totalFeesSol: number;
  tradesCount: number;
  winningTradesCount: number;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
}

// Portfolio Stats
export interface PortfolioStats {
  totalTrades: number;
  winningTrades: number;
  totalPnl: number;
  averageReturn: number;
}

// Price Service Types
export interface TokenPrice {
  price: number;
  timestamp: number;
  confidence?: number;
  source: string;
}

// Trade Analysis Types
export interface TradeAnalysis {
  tradeId: number;
  score: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  insights: string[];
  metadata?: Record<string, any>;
}

// Pool State Types
export interface PoolState {
  poolAddress: string;
  lpSupply: string;
  tokenABalance: string;
  tokenBBalance: string;
  timestamp: Date;
}

// Trade Quote Types
export interface TradeQuote {
  amountIn: number;
  estimatedAmountOut: string;
  priceImpact: number;
  fee: string;
}

// Portfolio Status Response
export interface PortfolioStatusResponse {
  status: 'uninitialized' | 'active';
  message: string;
  action?: string;
  portfolio: Portfolio | null;
  stats: PortfolioStats | null;
  lastPrice: number;
}