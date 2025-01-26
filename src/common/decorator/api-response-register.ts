import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiCreatedResponse, ApiConflictResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiBody, ApiInternalServerErrorResponse } from '@nestjs/swagger';

export function ApiResponseRegister<T>(dto: new () => T, nameModule: string) {
  return applyDecorators(
    ApiOperation({ summary: `This method allows you to register in ${nameModule}` }),
    ApiCreatedResponse({ description: `Successfully registered in ${nameModule}` }),
    ApiConflictResponse({ description: "Conflict" }),
    ApiBadRequestResponse({ description: "Bad Request" }),
    ApiUnauthorizedResponse({ description: "Unauthorized" }),
    ApiBody({ type: dto }),
    ApiInternalServerErrorResponse({ description: "Internal Server Error" }),
  );
}