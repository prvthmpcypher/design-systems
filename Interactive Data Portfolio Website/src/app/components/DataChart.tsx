import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface DataChartProps {
  type: 'line' | 'area' | 'radar';
  data: any[];
  dataKey: string;
  xKey?: string;
  color?: string;
}

export function DataChart({ type, data, dataKey, xKey, color = '#60a5fa' }: DataChartProps) {
  const gradientId = `gradient-${type}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {type === 'line' && (
          <LineChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, r: 6, strokeWidth: 2, stroke: '#000' }}
              animationDuration={2000}
              isAnimationActive={true}
            />
          </LineChart>
        )}
        {type === 'area' && (
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              animationDuration={2000}
              isAnimationActive={true}
            />
          </AreaChart>
        )}
        {type === 'radar' && (
          <RadarChart data={data}>
            <PolarGrid stroke={color + '40'} />
            <PolarAngleAxis dataKey={xKey || 'subject'} stroke={color} />
            <PolarRadiusAxis stroke={color + '60'} />
            <Radar
              name={dataKey}
              dataKey={dataKey}
              stroke={color}
              fill={color}
              fillOpacity={0.3}
              animationDuration={2000}
              isAnimationActive={true}
            />
          </RadarChart>
        )}
      </ResponsiveContainer>
    </motion.div>
  );
}
