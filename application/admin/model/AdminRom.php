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

use app\admin\model\AdminRole as AdminRoleModel;
use app\common\model\BaseModel;

/**
 * (角色、用户)菜单-模型
 * @author zongjl
 * @date 2019/6/10
 * Class AdminRom
 * @package app\admin\model
 */
class AdminRom extends BaseModel
{
    // 设置数据表
    protected $table = DB_PREFIX . 'admin_rom';

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
            // TODO...
        }
        return $info;
    }

    /**
     * 获取权限列表
     * @param $adminId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getPermissionList($adminId)
    {
        $adminMod = new Admin();
        $adminInfo = $adminMod->where("id", $adminId)->find();

        $map1 = [];
        if ($adminInfo['role_ids']) {
            $map1 = [
                ['r.type', '=', 1],
                ['r.type_id', 'in', $adminInfo['role_ids']],
            ];
        }
        $map2 = [
            ['r.type', '=', 2],
            ['r.type_id', '=', $adminId],
        ];
        $map = [$map1, $map2];
        $menuMod = new Menu();
        $menuList = $menuMod->alias('m')
            ->join('think_admin_rom r', 'r.menu_id=m.id')
            ->distinct(true)
            ->where(function ($query) use ($map) {
                $query->whereOr($map);
            })
            ->where('m.type', '=', 3)
            ->where('m.is_show', '=', 1)
            ->where('m.mark', '=', 1)
            ->order('m.sort ASC')
            ->field('m.id')
            ->select();
        $list = [];
        if (!empty($menuList)) {
            foreach ($menuList as $vm) {
                // 根据菜单获取节点
                $funcList = $menuMod->alias('m')
                    ->join('think_admin_rom r', 'r.menu_id=m.id')
                    ->distinct(true)
                    ->where(function ($query) use ($map) {
                        $query->whereOr($map);
                    })
                    ->where('m.type', '=', 4)
                    ->where('m.pid', '=', intval($vm['id']))
                    ->where('m.is_show', '=', 1)
                    ->where('m.mark', '=', 1)
                    ->order('m.id ASC')
                    ->field('m.id')
                    ->select();
                if ($funcList) {
                    foreach ($funcList as $v) {
                        $list[$vm['id']][] = $v['id'];
                    }
                }
            }
        }
        return $list;
    }

    /**
     * 获取人员权限
     * @param $adminId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getPermissionList2($adminId)
    {
        $adminMod = new Admin();
        $adminInfo = $adminMod->where("id", $adminId)->find();

        // 用户权限
        $authList = [];

        // 独立权限
        $adminAuth = $adminMod->getAdminAuth($adminId);
        if (is_array($adminAuth)) {
            foreach ($adminAuth as $key => $val) {
                $authList[$key][] = $val;
            }
        }

        // 角色权限
        if ($adminInfo['role_ids']) {
            $admin_role_model = new AdminRoleModel();
            $roleIds = explode(',', $adminInfo['role_ids']);
            $roleAuth = $admin_role_model->getRoleAuth($roleIds);
            if (is_array($roleAuth)) {
                foreach ($roleAuth as $kt => $vt) {
                    $authList[$kt][] = $vt;
                }
            }
        }

        // 权限重组
        $permissionList = [];
        foreach ($authList as $key => $val) {
            if (!in_array($key, array_keys($permissionList))) {
                $permissionList[$key] = array();
            }
            foreach ($val as $vt) {
                foreach ($vt as $v) {
                    if (!in_array($v, $permissionList[$key])) {
                        $permissionList[$key][] = $v;
                    }
                }
            }
        }
        return $permissionList;
    }
}
