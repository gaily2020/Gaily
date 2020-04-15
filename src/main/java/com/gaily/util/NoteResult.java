package com.gaily.util;

import java.io.Serializable;

/**
 * @author guyouhai888
 * @date 2020/4/14
 */
public class NoteResult<T> implements Serializable {
    private int status;
    private String msg;
    private T data;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "NoteResult [status=" + status + ", msg=" + msg + ", data=" + data + "]";
    }

}
