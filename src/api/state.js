import xhr from './api'


// 获取文章列表
export function getArticlesList() {
  return xhr.get('api/v1/app/articles?page=1&per_page=10&sort_field=updated_at&sort_way=desc&channel_id=1')
}

// 上访人员行为预警数据
export function getPersons() {
  return xhr.get('static/json/state/warn.json')
}

// 上访人员数量趋势
export function getCount() {
  return xhr.get('static/json/state/count.json')
}

// 上访人敏感行为趋势
export function getTender() {
  return xhr.get('static/json/state/tender.json')
}

// 上访人员性别、年龄分布
export function getSex() {
  return xhr.get('static/json/state/sex.json')
}

export function getReason() {
  return xhr.get('static/json/state/reason.json')
}
