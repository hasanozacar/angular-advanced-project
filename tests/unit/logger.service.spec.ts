import { LoggerService } from '../../src/app/core/services/logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  });

  it('should log a message', () => {
    spyOn(console, 'log');
    service.log('Test message');
    expect(console.log).toHaveBeenCalledWith('[LOG]: Test message');
  });
});
