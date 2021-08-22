package io.ionic.starter;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Created by Eli Malki on 22/08/2021
 */
@CapacitorPlugin(name = "IonicNativePluginExample")
public class IonicNativePluginExample extends Plugin {

    @PluginMethod
    public void NativeMethod(PluginCall call){
        JSObject result = new JSObject();
        result.put("message", "Hello Android user!");
        call.resolve(result);
    }

    @PluginMethod
    public void NotifyListeners(PluginCall call){
        JSObject result = new JSObject();
        result.put("message", "Hello Android user!");
        notifyListeners("EVENT_LISTENER_NAME", result);
    }

}