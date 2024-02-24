import apiHelper from './apiHelper';
import Config from '../../config';
import { IPageQuery } from '../../types/mixTypes';
import { IFeature } from '../../types/feature';

class FeatureApi {
    public static getAllFeatures() {
        return apiHelper.privateReq({
            method: 'GET',
            url: Config.Origin + Config.RootApiEndpoint + 'features?page=1&pageSize=10000'
        })
    }

    public static getFeatures(query:IPageQuery = {}) {
        const page =  query.hasOwnProperty('page')? 'page=' + query.page: null
        const pageSize = query.hasOwnProperty('pageSize')? 'pageSize=' + query.pageSize: null

        const queries = [page, pageSize].filter(item => item)
        const strQueries = queries.join('&')

        return apiHelper.privateReq({
            method: 'GET',
            url: Config.Origin + Config.RootApiEndpoint + `features${ queries.length? '?' + strQueries: '' }`
        })
    }

    public static getFeature(id:string) {
        return apiHelper.privateReq({
            method: 'GET',
            url: Config.Origin + Config.RootApiEndpoint + `features/${ id }`
        })
    }

    public static updateFeature(feature:IFeature) {
        const data = {
            'name': feature.name,
            'description': feature.description,
            'value': feature.value,
            'type': feature.type,
            'tags': feature.tags?.join(',')
            // 'tags': feature.tags
        }

        return apiHelper.privateReq({
            method: 'PUT',
            url: Config.Origin + Config.RootApiEndpoint + `features/${ feature._id }`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data
        })
    }

    public static createFeature(feature:IFeature) {
        const data = {
            'name': feature.name,
            'description': feature.description,
            'value': feature.value,
            'type': feature.type,
            'tags': feature.tags?.join(',')
            // 'tags': feature.tags
        }

        return apiHelper.privateReq({
            method: 'POST',
            url: Config.Origin + Config.RootApiEndpoint + `features`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data
        })
    }

    public static deleteFeature(id:string) {
        return apiHelper.privateReq({
            method: 'DELETE',
            url: Config.Origin + Config.RootApiEndpoint + `features/${ id }`
        })
    }

    // role features
    public static getRoleFeatures(roleId:string = '') {
        return apiHelper.privateReq({
            method: 'GET',
            url: Config.Origin + Config.RootApiEndpoint + `roles/${ roleId }/features`
        })
    }

    public static createRoleFeature(roleId:string = '', featureId:string) {
        const data = {
            'featureId': featureId
        }

        return apiHelper.privateReq({
            method: 'POST',
            url: Config.Origin + Config.RootApiEndpoint + `roles/${ roleId }/features`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data
        })
    }

}

export default FeatureApi