import React from 'react';
import { Auction } from './Auction';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DarkOrbit/Auction',
  component: Auction,
  tags: ['autodocs'],
} satisfies Meta<typeof Auction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainAuction: Story = {
  args: {
    items: [
      {
          itemName: "X-wing",
          itemImage: "",
          topBidderName: "Speed",
          topBid: 1000000,
          yourBid: 0,
          instantBuy: 4200,
          sold: true
      },
      {
          itemName: "Prometheus",
          itemImage: "",
          topBidderName: "Thomas",
          topBid: 15000000,
          yourBid: 15000000,
          instantBuy: 45800,
          sold: false
      },
      {
          itemName: "Victory",
          itemImage: "",
          topBidderName: "Thomas",
          topBid: 9800000,
          yourBid: 9800000,
          instantBuy: 50065,
          sold: true
      },
      {
          itemName: "Daedalus",
          itemImage: "",
          topBidderName: "Speed",
          topBid: 98000000,
          yourBid: 98000000,
          instantBuy: 58500,
          sold: false
      },
  ],
  }
};