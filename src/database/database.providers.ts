import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const dataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: +(process.env.TYPEORM_PORT || 0),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
