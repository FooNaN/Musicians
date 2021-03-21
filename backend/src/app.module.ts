import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VenuesModule } from './venues/venues.module'
import { Venue } from './venues/entities/venue.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `postgres`,
      host: `database`,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Venue],
      synchronize: true,
    }),
    VenuesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
