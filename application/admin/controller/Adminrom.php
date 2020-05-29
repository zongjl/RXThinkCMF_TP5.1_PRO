<?php


namespace app\admin\controller;


use app\admin\service\AdminRomService;

/**
 * 权限控制器
 * Class Adminrom
 * @package app\admin\controller
 */
class Adminrom extends AdminBase
{
    /**
     * 初始化方法
     * @author 牧羊人
     * @date 2019/5/29
     */
    public function initialize()
    {
        parent::initialize();
        $this->service = new AdminRomService();
    }

    /**
     * 获取角色权限
     * @return mixed
     */
    public function index()
    {
        $result = $this->service->getList();
        return $result;
    }

    /**
     * 设置角色权限
     * @return mixed
     */
    public function setPermission()
    {
        $result = $this->service->setPermission();
        return $result;
    }
}