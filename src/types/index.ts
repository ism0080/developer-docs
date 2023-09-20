export type Link = {
    name: string;
    description: string;
    url: string;
    type: string;
};

export type PocketBaseResponse<T> = {
    items: T[];
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
};
