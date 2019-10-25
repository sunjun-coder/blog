<template>
    <div class="demo-button">
        <div>
            图片：
            <hosjoy-Upload v-model="fileList" :action='action' :uploadParameters='uploadParameters' style="margin:25px 0" />
            文件：
            <hosjoy-Upload showAsFileName v-model="fileNameList" :action='action' :uploadParameters='uploadParameters' style="margin:25px 0">
                <el-button size="small" type="primary">点击上传</el-button>
            </hosjoy-Upload>
        </div>
    </div>
</template>

<script>
import hosjoyUpload from '../src/HosJoyUpload/HosJoyUpload'
export default {
    name: 'HosJoyUpload',
    components: {
        hosjoyUpload
    },
    data () {
        return {
            action: 'http://192.168.20.248:30000/tms/files/upload',
            fileList: ['https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191017/e340708c-d4a8-4b69-a051-6e62b78e1fd4.png', 'https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191017/a9645dda-eb30-4304-8933-a542ed9a3396.png'],
            uploadParameters: {
                updateUid: '张功伟'
            },
            fileNameList: [{ name: 'x.pdf', url: 'https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191023/c453f100-9414-4c52-8dba-08b35ed32cdd.pdf' }, { name: 'x2.pdf', url: 'https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191023/c453f100-9414-4c52-8dba-08b35ed32cdd.pdf' }],

        }
    }
}
</script>

