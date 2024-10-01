/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { useQuery } from "@tanstack/react-query"
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  GetSearchCompatAppsSearchQueryGetParams,
  HTTPValidationError,
} from ".././model"

/**
 * @summary Get Recently Updated
 */
export const getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/collection/recently-updated/25`, options)
}

export const getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25GetQueryKey =
  () => {
    return [`/compat/apps/collection/recently-updated/25`] as const
  }

export const getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25GetQueryOptions =
  <
    TData = Awaited<
      ReturnType<
        typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
      >
    >,
    TError = AxiosError<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  }) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25GetQueryKey()

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
        >
      >
    > = ({ signal }) =>
      getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get({
        signal,
        ...axiosOptions,
      })

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25GetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
      >
    >
  >
export type GetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25GetQueryError =
  AxiosError<unknown>

export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get<
  TData = Awaited<
    ReturnType<
      typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
    >
  >,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
        >
      >,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<
          ReturnType<
            typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
          >
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get<
  TData = Awaited<
    ReturnType<
      typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
    >
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
        >
      >,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<
          ReturnType<
            typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
          >
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get<
  TData = Awaited<
    ReturnType<
      typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
    >
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
        >
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Recently Updated
 */

export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get<
  TData = Awaited<
    ReturnType<
      typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
    >
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25Get
        >
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdated25GetQueryOptions(
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Recently Updated
 */
export const getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/collection/recently-updated`, options)
}

export const getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGetQueryKey =
  () => {
    return [`/compat/apps/collection/recently-updated`] as const
  }

export const getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<
        typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
      >
    >,
    TError = AxiosError<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  }) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGetQueryKey()

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
        >
      >
    > = ({ signal }) =>
      getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet({
        signal,
        ...axiosOptions,
      })

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
      >
    >
  >
export type GetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGetQueryError =
  AxiosError<unknown>

export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet>
  >,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
        >
      >,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<
          ReturnType<
            typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
          >
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
        >
      >,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<
          ReturnType<
            typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
          >
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
        >
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Recently Updated
 */

export function useGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGet
        >
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getGetRecentlyUpdatedCompatAppsCollectionRecentlyUpdatedGetQueryOptions(
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Recently Added
 */
export const getRecentlyAddedCompatAppsCollectionNew25Get = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/collection/new/25`, options)
}

export const getGetRecentlyAddedCompatAppsCollectionNew25GetQueryKey = () => {
  return [`/compat/apps/collection/new/25`] as const
}

export const getGetRecentlyAddedCompatAppsCollectionNew25GetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetRecentlyAddedCompatAppsCollectionNew25GetQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>
  > = ({ signal }) =>
    getRecentlyAddedCompatAppsCollectionNew25Get({ signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetRecentlyAddedCompatAppsCollectionNew25GetQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>
  >
export type GetRecentlyAddedCompatAppsCollectionNew25GetQueryError =
  AxiosError<unknown>

export function useGetRecentlyAddedCompatAppsCollectionNew25Get<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
  >,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<
          ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyAddedCompatAppsCollectionNew25Get<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<
          ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyAddedCompatAppsCollectionNew25Get<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Recently Added
 */

export function useGetRecentlyAddedCompatAppsCollectionNew25Get<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNew25Get>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getGetRecentlyAddedCompatAppsCollectionNew25GetQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Recently Added
 */
export const getRecentlyAddedCompatAppsCollectionNewGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/collection/new`, options)
}

export const getGetRecentlyAddedCompatAppsCollectionNewGetQueryKey = () => {
  return [`/compat/apps/collection/new`] as const
}

export const getGetRecentlyAddedCompatAppsCollectionNewGetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetRecentlyAddedCompatAppsCollectionNewGetQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>
  > = ({ signal }) =>
    getRecentlyAddedCompatAppsCollectionNewGet({ signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetRecentlyAddedCompatAppsCollectionNewGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>
>
export type GetRecentlyAddedCompatAppsCollectionNewGetQueryError =
  AxiosError<unknown>

export function useGetRecentlyAddedCompatAppsCollectionNewGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>
  >,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyAddedCompatAppsCollectionNewGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetRecentlyAddedCompatAppsCollectionNewGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Recently Added
 */

export function useGetRecentlyAddedCompatAppsCollectionNewGet<
  TData = Awaited<
    ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getRecentlyAddedCompatAppsCollectionNewGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getGetRecentlyAddedCompatAppsCollectionNewGetQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Popular Apps
 */
export const getPopularAppsCompatAppsCollectionPopular50Get = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/collection/popular/50`, options)
}

export const getGetPopularAppsCompatAppsCollectionPopular50GetQueryKey = () => {
  return [`/compat/apps/collection/popular/50`] as const
}

export const getGetPopularAppsCompatAppsCollectionPopular50GetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetPopularAppsCompatAppsCollectionPopular50GetQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>>
  > = ({ signal }) =>
    getPopularAppsCompatAppsCollectionPopular50Get({ signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPopularAppsCompatAppsCollectionPopular50GetQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>>
  >
export type GetPopularAppsCompatAppsCollectionPopular50GetQueryError =
  AxiosError<unknown>

export function useGetPopularAppsCompatAppsCollectionPopular50Get<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
  >,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
      >,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<
          ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetPopularAppsCompatAppsCollectionPopular50Get<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
      >,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<
          ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetPopularAppsCompatAppsCollectionPopular50Get<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Popular Apps
 */

export function useGetPopularAppsCompatAppsCollectionPopular50Get<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<
        ReturnType<typeof getPopularAppsCompatAppsCollectionPopular50Get>
      >,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getGetPopularAppsCompatAppsCollectionPopular50GetQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Popular Apps
 */
export const getPopularAppsCompatAppsCollectionPopularGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/collection/popular`, options)
}

export const getGetPopularAppsCompatAppsCollectionPopularGetQueryKey = () => {
  return [`/compat/apps/collection/popular`] as const
}

export const getGetPopularAppsCompatAppsCollectionPopularGetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetPopularAppsCompatAppsCollectionPopularGetQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>
  > = ({ signal }) =>
    getPopularAppsCompatAppsCollectionPopularGet({ signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPopularAppsCompatAppsCollectionPopularGetQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>
  >
export type GetPopularAppsCompatAppsCollectionPopularGetQueryError =
  AxiosError<unknown>

export function useGetPopularAppsCompatAppsCollectionPopularGet<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
  >,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<
          ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetPopularAppsCompatAppsCollectionPopularGet<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<
          ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
        >,
        TError,
        TData
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetPopularAppsCompatAppsCollectionPopularGet<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Popular Apps
 */

export function useGetPopularAppsCompatAppsCollectionPopularGet<
  TData = Awaited<
    ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>
  >,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getPopularAppsCompatAppsCollectionPopularGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getGetPopularAppsCompatAppsCollectionPopularGetQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Search
 */
export const getSearchCompatAppsSearchQueryGet = (
  query: string,
  params?: GetSearchCompatAppsSearchQueryGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/search/${query}`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetSearchCompatAppsSearchQueryGetQueryKey = (
  query: string,
  params?: GetSearchCompatAppsSearchQueryGetParams,
) => {
  return [`/compat/apps/search/${query}`, ...(params ? [params] : [])] as const
}

export const getGetSearchCompatAppsSearchQueryGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  query: string,
  params?: GetSearchCompatAppsSearchQueryGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetSearchCompatAppsSearchQueryGetQueryKey(query, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>
  > = ({ signal }) =>
    getSearchCompatAppsSearchQueryGet(query, params, {
      signal,
      ...axiosOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!query,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetSearchCompatAppsSearchQueryGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>
>
export type GetSearchCompatAppsSearchQueryGetQueryError =
  AxiosError<HTTPValidationError>

export function useGetSearchCompatAppsSearchQueryGet<
  TData = Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  query: string,
  params: undefined | GetSearchCompatAppsSearchQueryGetParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
          TError,
          TData
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetSearchCompatAppsSearchQueryGet<
  TData = Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  query: string,
  params?: GetSearchCompatAppsSearchQueryGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
          TError,
          TData
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetSearchCompatAppsSearchQueryGet<
  TData = Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  query: string,
  params?: GetSearchCompatAppsSearchQueryGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Search
 */

export function useGetSearchCompatAppsSearchQueryGet<
  TData = Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  query: string,
  params?: GetSearchCompatAppsSearchQueryGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSearchCompatAppsSearchQueryGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetSearchCompatAppsSearchQueryGetQueryOptions(
    query,
    params,
    options,
  )

  const _query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  _query.queryKey = queryOptions.queryKey

  return _query
}

/**
 * @summary Get Single App
 */
export const getSingleAppCompatAppsAppIdGet = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/compat/apps/${appId}`, options)
}

export const getGetSingleAppCompatAppsAppIdGetQueryKey = (appId: string) => {
  return [`/compat/apps/${appId}`] as const
}

export const getGetSingleAppCompatAppsAppIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetSingleAppCompatAppsAppIdGetQueryKey(appId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>
  > = ({ signal }) =>
    getSingleAppCompatAppsAppIdGet(appId, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!appId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetSingleAppCompatAppsAppIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>
>
export type GetSingleAppCompatAppsAppIdGetQueryError =
  AxiosError<HTTPValidationError>

export function useGetSingleAppCompatAppsAppIdGet<
  TData = Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
          TError,
          TData
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetSingleAppCompatAppsAppIdGet<
  TData = Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
          TError,
          TData
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetSingleAppCompatAppsAppIdGet<
  TData = Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get Single App
 */

export function useGetSingleAppCompatAppsAppIdGet<
  TData = Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getSingleAppCompatAppsAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetSingleAppCompatAppsAppIdGetQueryOptions(
    appId,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
