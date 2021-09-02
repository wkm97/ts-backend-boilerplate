/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as express from 'express';

import Logger from '@shared/infra/logger';

export abstract class BaseController {
  protected abstract executeImpl(req: express.Request, res: express.Response): Promise<void | express.Response>;

  public async execute(req: express.Request, res: express.Response): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      Logger.warn(`[BaseController]: Uncaught controller error`);
      Logger.error(err);
      this.fail(res, 'An unexpected error occurred');
    }
  }

  public static jsonResponse(res: express.Response, code: number, message: string): express.Response {
    return res.status(code).json({ message });
  }

  public ok<T>(res: express.Response, dto?: T): express.Response {
    if (dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    }
    return res.sendStatus(200);
  }

  public created(res: express.Response): express.Response {
    return res.sendStatus(201);
  }

  public clientError(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 400, message || 'Unauthorized');
  }

  public unauthorized(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 401, message || 'Unauthorized');
  }

  public paymentRequired(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 402, message || 'Payment required');
  }

  public forbidden(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 403, message || 'Forbidden');
  }

  public notFound(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 404, message || 'Not found');
  }

  public conflict(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 409, message || 'Conflict');
  }

  public tooMany(res: express.Response, message?: string): express.Response {
    return BaseController.jsonResponse(res, 429, message || 'Too many requests');
  }

  public todo(res: express.Response): express.Response {
    return BaseController.jsonResponse(res, 400, 'TODO');
  }

  public fail(res: express.Response, error: Error | string): express.Response {
    Logger.error(error);
    return res.status(500).json({
      message: error.toString(),
    });
  }
}
