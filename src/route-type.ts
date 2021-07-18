export default interface RouteType {
    path: string;
    name?: string;
    exact?: boolean;
    component: any;
    props?: any;
}
