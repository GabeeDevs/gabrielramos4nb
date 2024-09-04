import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://javascripto_wjf1_user:QtdC2XkGYuyQwWivBazz5ZEMUZyis9US@dpg-crbp02dds78s73942tfg-a.oregon-postgres.render.com/javascripto_wjf1';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
