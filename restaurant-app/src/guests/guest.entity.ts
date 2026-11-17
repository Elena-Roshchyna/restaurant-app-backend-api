import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guests')
export class Guest {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'full_name', nullable: false, unique: false })
    fullName: string;

    @Column({ name: 'phone', nullable: false, unique: true })
    phone: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;
}
