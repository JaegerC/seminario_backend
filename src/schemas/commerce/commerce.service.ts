import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Commerce } from 'src/entities/commerce.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class CommerceService {
  constructor(
    @InjectRepository(Commerce) private commerceRepository: Repository<Commerce>,
    private connection: Connection
  ) { }

  async getCommerces(): Promise<Commerce[]> {
    return await this.commerceRepository.find({ where: { is_active: true } });;
  }

  async getCommerceDataById(commerceId: number): Promise<Commerce> {
    try {
      if (!commerceId || isNaN(commerceId)) {
        throw new NotAcceptableException("Debe de seleccionar un comercio");
      }

      return await this.connection.getRepository(Commerce)
        .createQueryBuilder("commerce")
        .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
        .leftJoinAndSelect("commerce.branches", "branches")
        .leftJoinAndSelect("branches.complaints", "complaints")
        .leftJoinAndSelect("branches.municipality", "municipality")
        .leftJoinAndSelect("municipality.department", "department")
        .leftJoinAndSelect("department.region", "region")
        .where("commerce.id = :commerceId", { commerceId })
        .getOne();
    } catch (e) {
      return e;
    }
  }

  async getCommerceByFilter(
    commerce_name: string,
    regionId: number,
    departmentId: number,
    municipalityId: number
  ): Promise<any> {
    try {
      if ((!commerce_name || commerce_name.trim() === "")
        && (!regionId || regionId === 0 || isNaN(regionId))
        && (!departmentId || departmentId === 0 || isNaN(departmentId))
        && (!municipalityId || municipalityId === 0 || isNaN(municipalityId))) {
        throw new NotAcceptableException("Debe de proporcionar por lo menos un parametro de busqueda");
      }

      console.log({
        commerce_name,
        regionId,
        departmentId,
        municipalityId
      })
      let commerce: Commerce[] = null;
      if (municipalityId && municipalityId !== 0) {
        console.log("entrando a la consulta");
        commerce = await this.connection.getRepository(Commerce)
          .createQueryBuilder("commerce")
          .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
          .leftJoinAndSelect("commerce.branches", "branches")
          .leftJoinAndSelect("branches.complaints", "complaints")
          .leftJoinAndSelect("branches.municipality", "municipality")
          .leftJoinAndSelect("municipality.department", "department")
          .leftJoinAndSelect("department.region", "region")
          .where("branches.municipalityId = :municipalityId", { municipalityId })
          .getMany();
        console.log(commerce[0].branches[0].municipality);
      } else if (departmentId && departmentId !== 0 && municipalityId === 0) {
        commerce = await this.connection.getRepository(Commerce)
          .createQueryBuilder("commerce")
          .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
          .leftJoinAndSelect("commerce.branches", "branches")
          .leftJoinAndSelect("branches.complaints", "complaints")
          .leftJoinAndSelect("branches.municipality", "municipality")
          .leftJoinAndSelect("municipality.department", "department")
          .leftJoinAndSelect("department.region", "region")
          .where("department.id = :departmentId", { departmentId })
          .getMany();
      } else if (regionId && regionId !== 0 && departmentId === 0 && municipalityId === 0) {
        commerce = await this.connection.getRepository(Commerce)
          .createQueryBuilder("commerce")
          .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
          .leftJoinAndSelect("commerce.branches", "branches")
          .leftJoinAndSelect("branches.complaints", "complaints")
          .leftJoinAndSelect("branches.municipality", "municipality")
          .leftJoinAndSelect("municipality.department", "department")
          .leftJoinAndSelect("department.region", "region")
          .where("region.id = :regionId", { regionId })
          .getMany();
      }
      return {
        success: true,
        data: commerce,
        error: null
      }
    } catch (err) {
      return {
        success: false,
        data: null,
        error: err.message
      };
    }
  }
}
