export interface ErrorResponseApi<Type> {
  message: string;
  errors: {
    [Property in keyof Type]?: string[];
  };
}
