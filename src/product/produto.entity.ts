import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")

export class Produto {
  
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'Nome', type: 'varchar' })
  name: string;

  @Column({ name: 'Descrição', type: 'varchar' })
  description: string;

  @Column({ name: 'Preço', type: 'varchar' })
  price: string;

  @Column({ name: 'Quantidade em Estoque', type: 'int' })
  stockQuantity: number;

  @Column({ name: 'Data de Validade', type: 'varchar' })
  expirationDate: string;

  @Column({ name: 'Unidade de Medida', type: 'varchar' })
  unity: string;
  
}