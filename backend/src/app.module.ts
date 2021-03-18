import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VenuesModule } from './venues/venues.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `postgres`,
      host: `database`,
      port: 5432,
      username: `xalvaine`,
      password: `example`,
      database: `musicians`,
      entities: [],
      synchronize: true,
    }),
    VenuesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
