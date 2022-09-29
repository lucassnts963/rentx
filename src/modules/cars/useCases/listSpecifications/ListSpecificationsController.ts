import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request: Request, response: Response) {
    const Specifications = this.listSpecificationsUseCase.execute();

    return response.status(201).json(Specifications);
  }
}

export { ListSpecificationsController };
