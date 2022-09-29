import { Specification } from '../../models/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const Specifications = this.SpecificationsRepository.list();

    return Specifications;
  }
}

export { ListSpecificationsUseCase };
