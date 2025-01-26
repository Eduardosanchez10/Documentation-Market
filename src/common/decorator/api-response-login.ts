import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiConflictResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiBody, ApiInternalServerErrorResponse } from '@nestjs/swagger';

export function ApiResponseLogin<T>(dto: new () => T, nameModule: string) {
  return applyDecorators(
    ApiOperation({ summary: `This method allows you to log in ${nameModule}` }),
    ApiOkResponse({ description: "OK" }),
    ApiConflictResponse({ description: "Conflict" }),
    ApiBadRequestResponse({ description: "Bad Request" }),
    ApiUnauthorizedResponse({ description: "Unauthorized" }),
    ApiBody({ type: dto }),
    ApiInternalServerErrorResponse({ description: "Internal Server Error" }),
  );
}