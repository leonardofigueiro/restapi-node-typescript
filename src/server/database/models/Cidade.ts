

export interface ICidade {
  id: number,
  nome: string
}

export interface IParamsProps {
  id?: number
}

export interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string
}