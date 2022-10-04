import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private CategoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.CategoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category Already exists!');
    }

    await this.CategoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
