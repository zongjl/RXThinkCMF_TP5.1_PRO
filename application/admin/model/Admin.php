<?php
// +----------------------------------------------------------------------
// | RXThinkCMF框架 [ RXThinkCMF ]
// +----------------------------------------------------------------------
// | 版权所有 2017~2019 南京RXThink工作室
// +----------------------------------------------------------------------
// | 官方网站: http://www.rxthink.cn
// +----------------------------------------------------------------------
// | Author: 牧羊人 <rxthink.cn@gmail.com>
// +----------------------------------------------------------------------

namespace app\admin\model;

use app\common\model\BaseModel;
use app\admin\model\AdminRole as AdminRoleModel;

/**
 * 人员管理-模型
 * @author zongjl
 * @date 2019/6/10
 * Class Admin
 * @package app\admin\model
 */
class Admin extends BaseModel
{
    // 设置数据表
    protected $table = DB_PREFIX . 'admin';

    /**
     * 初始化模型
     * @author zongjl
     * @date 2019/6/10
     */
    public function initialize()
    {
        parent::initialize();
        // TODO...
    }

    /**
     * 获取缓存信息
     * @param int $id 记录ID
     * @return mixed 返回结果
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author zongjl
     * @date 2019/6/10
     */
    public function getInfo($id)
    {
        $info = parent::getInfo($id, true);
        if ($info) {
            // 头像
            if ($info['avatar']) {
                $info['avatar_url'] = get_image_url($info['avatar']);
            }

            // 入职日期
            if ($info['entry_date']) {
                $info['format_entry_date'] = datetime($info['entry_date'], 'Y-m-d');
            }

            // 性别
            if ($info['gender']) {
                $info['gender_name'] = config('config.gender_list')[$info['gender']];
            }

            // 岗位
            if ($info['position_id']) {
                $position_model = new Position();
                $position_info = $position_model->getInfo($info['position_id']);
                $info['position_name'] = $position_info['name'];
            }

            // 职级
            if ($info['level_id']) {
                $levelMod = new Level();
                $levelInfo = $levelMod->getInfo($info['level_id']);
                $info['level_name'] = $levelInfo['name'];
            }

            // 所属城市
            if ($info['district_id']) {
                $cityMod = new City();
                $cityName = $cityMod->getCityName($info['district_id'], " ");
                $info['city_name'] = $cityName;
            }

            // 获取人员权限
            $adminRomMod = new AdminRom();
            $permissionList = $adminRomMod->getPermissionList($id);
            $info['system_auth'] = $permissionList;
        }
        return $info;
    }
}
