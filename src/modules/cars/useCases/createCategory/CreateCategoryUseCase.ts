import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private CategoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.CategoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already exists!');
    }

    this.CategoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
