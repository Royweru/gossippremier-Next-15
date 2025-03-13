import {useQueryState,parseAsBoolean} from 'nuqs'

export const useSubscribeModal = ()=>{
    const[isOpen,setIsOpen] = useQueryState("subscribe-modal",
        parseAsBoolean.withDefault(false).withOptions({clearOnDefault:true})
    )
    const open = () =>setIsOpen(true)
    const close = () =>setIsOpen(false)

    return{
        isOpen,
        open,
        close,
        setIsOpen
    }
}