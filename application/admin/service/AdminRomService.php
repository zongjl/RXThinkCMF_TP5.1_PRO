<?php


namespace app\admin\service;


use app\admin\model\AdminRom;
use app\admin\model\Menu;

class AdminRomService extends BaseService
{
    /**
     * 初始化模型
     * @author 牧羊人
     * @date 2019/4/22
     */
    public function initialize()
    {
        parent::initialize();
        $this->model = new AdminRom();
    }

    /**
     * 获取角色菜单权限
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getList()
    {
        // 类型
        $type = request()->param("type");
        // 类型ID
        $typeId = request()->param('typeId');

        // 获取所有菜单
        $menuMod = new Menu();
        $menuList = $menuMod->getList([], 'sort asc');
        // 获取有权限的菜单
        $where = [
            ['type', '=', $type],
            ['type_id', '=', $typeId],
        ];
        $adminRomMod = new AdminRom();
        $permissionList = $adminRomMod->getList($where, "menu_id asc");
        $checkList = [];
        if ($permissionList) {
            $checkList = array_column($permissionList, "menu_id");
        }
        $list = [];
        if (!empty($menuList)) {
            foreach ($menuList as $val) {
                $data = [];
                $data['id'] = $val['id'];
                $data['name'] = trim($val['name']);
                $data['pId'] = $val['pid'];
                if (in_array($val['id'], $checkList)) {
                    $data['checked'] = true;
                } else {
                    $data['checked'] = false;
                }
                $data['open'] = true;
                $list[] = $data;
            }
        }
        return message("操作成功", true, $list);
    }

    /**
     * 设置角色菜单权限
     * @return array
     * @throws \think\Exception
     * @throws \think\db\exception\BindParamException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @throws \think\exception\PDOException
     */
    public function setPermission()
    {
        // 参数
        $param = request()->param();
        // 类型
        $type = intval($param['type']);
        // 类型ID
        $typeId = intval($param['typeId']);
        if (!$typeId) {
            return message("类型ID不能为空", false);
        }
        // 删除现有的权限
        $where = [
            ['type', '=', $type],
            ['type_id', '=', $typeId],
        ];
        $adminRomMod = new AdminRom();
        $permissionList = $adminRomMod->getList($where, "menu_id asc");
        if ($permissionList) {
            $itemList = array_column($permissionList, "id");
            $adminRomMod->deleteDAll($itemList, true);
        }
        // 权限ID
        $authIds = trim($param['authIds']);
        if ($authIds) {
            $itemArr = explode(',', $authIds);
            foreach ($itemArr as $val) {
                $data = [
                    'type' => $type,
                    'type_id' => $typeId,
                    'menu_id' => $val,
                ];
                $adminRomMod = new AdminRom();
                $adminRomMod->edit($data);
            }
        }
        return message("操作成功");
    }
}