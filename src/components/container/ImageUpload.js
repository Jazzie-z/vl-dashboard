import React, { useState } from 'react'
import { Upload, Modal, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import firebase, { db, storage } from 'firebase/setup';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}



export const ImageUpload = ({ setImages }) => {

    const [fileList, setFileList] = useState([])
    const [previewVisible, setPreviewVisible] = useState(false)
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    const customUpload = async ({ onError, onSuccess, file }) => {
        const metadata = {
            contentType: 'image/jpeg'
        }
        const storageRef = await storage.ref();
        const imgFile = storageRef.child(`violet/${file.uid}-${file.name}`);
        try {
            const image = await imgFile.put(file, metadata);
            const url = await imgFile.getDownloadURL();
            setImages(prev => [...prev, url]);
            onSuccess(null, image);
        } catch (e) {
            onError(e);
        }
    };

    const handleChange = ({fileList}) => {
        // setImages(fileList)
        console.error(fileList)
        setFileList(fileList);
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <Card title={'Image'}>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                multiple={true}
                customRequest={customUpload}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </Card>
    )
}

