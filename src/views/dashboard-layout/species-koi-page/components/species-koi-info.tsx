import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui";

interface InfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export function InfoCard(props: InfoCardProps) {
  const { title, value, icon } = props;
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <CardTitle>
          <p className="text-2xl font-bold">{value}</p>
        </CardTitle>
        <div className="flex items-center text-sm">
          {icon}
          <span className="ml-2">{title}</span>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
