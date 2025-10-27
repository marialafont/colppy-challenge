import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://frontend-production-75d4.up.railway.app',
  'https://api-production-7e03.up.railway.app',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.use(express.json());

const generateMetrics = () => {
  const timestamp = new Date().toISOString();
  const activeUsers = Math.floor(Math.random() * 5000);
  const newUsers = Math.floor(Math.random() * 200);
  const revenue = parseFloat((Math.random() * 10000).toFixed(2));
  const churnRate = parseFloat((Math.random() * 0.15).toFixed(3));

  const totalRegionalUsers = activeUsers;
  const usShare = 0.4 + Math.random() * 0.1;
  const euShare = 0.25 + Math.random() * 0.1;
  const latamShare = 0.2 + Math.random() * 0.1;
  const apacShare = 1 - usShare - euShare - latamShare;

  return {
    timestamp,
    activeUsers,
    newUsers,
    revenue,
    churnRate,
    byRegion: {
      US: Math.floor(totalRegionalUsers * usShare),
      EU: Math.floor(totalRegionalUsers * euShare),
      LATAM: Math.floor(totalRegionalUsers * latamShare),
      APAC: Math.floor(totalRegionalUsers * apacShare),
    },
  };
};

app.get('/metrics', (req, res) => {
  try {
    const { count = 20 } = req.query;
    const metricsArray = Array.from({ length: Number(count) }, () =>
      generateMetrics()
    );
    res.json(metricsArray);
  } catch (error) {
    res.status(500).json({ error: 'Error al generar métricas' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API corriendo en puerto ${PORT}`);
});
