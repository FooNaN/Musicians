import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Venue {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  name: string

  @Column()
  description: string
}
