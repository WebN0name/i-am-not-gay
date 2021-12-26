import { useRouter } from "next/router"


export default function Nothing(){

    const router = useRouter()

    const watch = () => {
        router.push('/my-love')
      }

    return(
        <div style={{display: 'flex', minHeight: '100vh' ,justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Правильный ответ: <strong>Никто)</strong></h1> 
            <button onClick={() => watch()}>Посмотреть кем занято мое сердце</button>
        </div>
    )
}