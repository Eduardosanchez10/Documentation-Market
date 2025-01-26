import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

export function CustomApiResponse(options: { status: number; description: string }) {
  return applyDecorators(
    ApiResponse({ status: options.status, description: options.description }),
  );
}