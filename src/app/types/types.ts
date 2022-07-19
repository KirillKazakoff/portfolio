export type ProjectInfoT = {
    title: string;
    desc: string;
};

export type ProjectInfoMainT = {
    titlemain: string;
} & ProjectInfoT;

export type ProjectInfoCommonT = ProjectInfoT | ProjectInfoMainT;

export type CommonT = {
    title: string;
    desc: string;
    main?: string;
};
