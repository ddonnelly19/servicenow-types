declare class sn_connect_SNAPIConversation {
    /**
     * Add a user to a conversation.
     * @param sysID The sys_ID of the user you want to add to a conversation.
    */
    addSubscriber(sysID: string): void;
    /**
     * Create a <span class="ph">Connect</span>
     * conversation.
     * @param name Create a conversation with a specific name.
     * @param type Include a specific conversation type. The type is determined by the type choice
     * list. The base system includes the following type options: <ul class="ul" id="conversation-create_String_String__ul_ut2_4df_wbb">
     * <li class="li">connect</li>
     *
     * <li class="li">support</li>
     *
     * <li class="li">group</li>
     *
     * <li class="li">peer</li>
     *
     * <li class="li">qanda</li>
     *
     * <li class="li">team</li>
     *
     * </ul>
    */
    create(name: string, type: string): any;
    /**
     * Get an existing Connect conversation by sys_id.
     * @param sysID The sys_id of the conversation record.
    */
    get(sysID: string): any;
    /**
     * Remove a user from a conversation.
     * @param SysID The sys_id of the user you want to remove from a conversation.
    */
    removeSubscriber(SysID: string): void;
    /**
     * Send a message to a conversation.
     * @param Body The main text of the message.
     * @param Field The field you want the message to appear as. Only use this option if adding a
     * message to a record conversation. Choose from work_notes, comments, or system. Using
     * the field system treats the message as a system message.
    */
    sendMessage(Body: string, Field: string): void;
}
export { sn_connect_SNAPIConversation };
