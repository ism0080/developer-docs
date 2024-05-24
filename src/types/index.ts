export type Link = {
    name: string;
    description: string;
    url: string;
    type: string;
};

export type TechToLearn = {
    name: string;
    description: string;
    url: string;
};

export type ProjectIdeas = {
    name: string;
    description: string;
};

export type PocketBaseResponse<T> = {
    items: T[];
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
};
