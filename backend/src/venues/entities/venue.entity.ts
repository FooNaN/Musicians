import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Venue {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  latitude: number

  @Column()
  longitude: number
}
